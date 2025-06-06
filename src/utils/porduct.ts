export function getNavigableTag(tags: string[]): string | null {
  const validTags = ["dining", "living", "bedroom"];
  return tags.find(tag => validTags.includes(tag.toLowerCase())) || null;
}