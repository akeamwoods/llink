export const generateSlug = (title: string) => {
  // Used to create a nice url slug
  // Replaces spaces with hyphens, remove full stops, commas, question marks, and converts to lower case
  return title.toLowerCase().replace(/ /g, "-").replace(/[.,?]/g, "");
};
