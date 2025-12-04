  <script>
    const times = {
      team1: ["Jogador A", "Jogador B", "Jogador C", "Jogador D"],
      team2: ["Jogador E", "Jogador F", "Jogador G", "Jogador H"],
    };

    const radios = document.querySelectorAll('input[name="team"]');
    const divJogadores = document.getElementById("jogadores");
    const btnLimpar = document.getElementById("btnLimpar");

    radios.forEach(radio => {
      radio.addEventListener("change", () => {
        const time = radio.value;
        divJogadores.innerHTML = "";
        const ul = document.createElement("ul");
        ul.className = "list-disc pl-5 text-gray-800";

        times[time].forEach(jogador => {
          const li = document.createElement("li");
          li.textContent = jogador;
          ul.appendChild(li);
        });

        divJogadores.appendChild(ul);
      });
    });

    btnLimpar.addEventListener("click", () => {
      radios.forEach(r => r.checked = false);
      divJogadores.textContent = "Escolha um time para ver os jogadores.";
    });

    // Ano automático
    document.getElementById("ano").textContent = new Date().getFullYear();
  </script>

</body>
</html>
