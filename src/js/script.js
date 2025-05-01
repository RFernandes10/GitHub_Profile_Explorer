let allRepos = [];
let visibleRepos = 6;
const reposPerPage = 6;

async function searchUser() {
  const username = document.getElementById("username").value.trim();
  if (!username) return;

  try {
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );
    const userData = await userResponse.json();

    if (userData.message === "Not Found") {
      alert("Usuário não encontrado!");
      return;
    }

    document.getElementById("profile").classList.add("active");
    document.getElementById("avatar").src = userData.avatar_url;
    document.getElementById("name").textContent =
      userData.name || userData.login;
    document.getElementById("bio").textContent =
      userData.bio || "Sem biografia disponível";
    document.getElementById("followers").textContent = userData.followers;
    document.getElementById("following").textContent = userData.following;
    document.getElementById("repos-count").textContent = userData.public_repos;

    const reposResponse = await fetch(userData.repos_url);
    allRepos = await reposResponse.json();
    visibleRepos = reposPerPage;

    displayRepos(allRepos.slice(0, visibleRepos));
    toggleLoadMoreButton();
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao buscar dados do usuário");
  }
}

function displayRepos(repos) {
  const reposGrid = document.getElementById("repos");
  reposGrid.innerHTML = "";

  repos.forEach((repo) => {
    const repoCard = document.createElement("div");
    repoCard.className = "repo-card";
    repoCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    ${repo.description ? `<p>${repo.description}</p>` : ""}
                    ${
                      repo.language
                        ? `<div class="language">${repo.language}</div>`
                        : ""
                    }
                    <a href="${
                      repo.html_url
                    }" target="_blank">Ver Repositório</a>
                `;
    reposGrid.appendChild(repoCard);
  });
}

function loadMoreRepos() {
  visibleRepos += reposPerPage;
  displayRepos(allRepos.slice(0, visibleRepos));
  toggleLoadMoreButton();
  window.scrollBy(0, 200);
}

function toggleLoadMoreButton() {
  const loadMoreButton = document.getElementById("loadMore");
  loadMoreButton.classList.toggle("hidden", allRepos.length <= visibleRepos);
}

document.getElementById("username").addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchUser();
});
