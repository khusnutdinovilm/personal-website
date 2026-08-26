export interface ISocialLink {
  label: string;
  icon: string;
  href: string;
}

const GITHUB_URL = "https://github.com/username";

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    label: "X (Twitter)",
    icon: "custom:x-social",
    href: "https://x.com/username",
  },
  {
    label: "LinkedIn",
    icon: "ri:linkedin-fill",
    href: "https://linkedin.com/in/username",
  },
  {
    label: "GitHub",
    icon: "ri:github-fill",
    href: GITHUB_URL,
  },
];

const github = SOCIAL_LINKS.find((l) => l.href === GITHUB_URL)!;

export const GITHUB_PROFILE: ISocialLink = {
  ...github,
  label: "@username",
};
