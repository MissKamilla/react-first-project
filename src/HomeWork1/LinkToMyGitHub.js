const LinkToMyGitHub = () => {
  const link = { url: "https://github.com/MissKamilla" };

  return (
    <a
      href={link.url}
      style={{ color: "red" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      My GitHub
    </a>
  );
};

export default LinkToMyGitHub;
