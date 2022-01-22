import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";
import { Repository } from "./RepositoryProps";

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/m4rcaoferole/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repo-list">
      <h1>Lista de Repositório</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
};
