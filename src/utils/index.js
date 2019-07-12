const sanitizeTitle = title => {
  return encodeURIComponent(title);
}

export default sanitizeTitle;
