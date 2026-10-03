export type MediaQueryRef = Readonly<Ref<boolean>>;

export const useMediaQuery = (query: MaybeRefOrGetter<string>): MediaQueryRef => {
  const matches = ref(false);

  if (import.meta.server || !window.matchMedia) {
    return readonly(matches);
  }

  let mql: MediaQueryList | null = null;

  const update = () => {
    matches.value = mql?.matches ?? false;
  };

  const cleanup = () => {
    mql?.removeEventListener("change", update);
    mql = null;
  };

  const listen = () => {
    cleanup();
    mql = window.matchMedia(toValue(query));
    update();
    mql.addEventListener("change", update);
  };

  onMounted(listen);

  watch(() => toValue(query), listen);

  onScopeDispose(cleanup);

  return readonly(matches);
};
