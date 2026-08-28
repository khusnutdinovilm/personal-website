export function mockRequest<T>(data: T, delay = 400): Promise<T> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(structuredClone(data));
    }, delay)
  );
}
