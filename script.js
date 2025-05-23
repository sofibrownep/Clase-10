const filas = document.querySelector("tbody");
            const texto = document.querySelector("#promedio");
            var total = 0;
            async function notas() {
                let consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/opr/refs/heads/main/clase-08/notas.json");
                let data = await consulta.json();
                console.log(data);
                data.forEach((d)=>{
                const porcentaje = ((d.nota - 1) / 6) * 100;

filas.innerHTML += `
  <tr>
    <td>${d.nombre}</td>
    <td>
      <svg width="160" height="20" style="font-family: 'Atkinson Hyperlegible', sans-serif; background-color: var(--colorSecundario); border-radius: 4px;">
        <!-- Barra azul proporcional -->
        <rect x="0" y="0" width="${(porcentaje * 160) / 100}" height="20" fill="#6646F0" />
        <!-- Texto encima -->
        <text x="8" y="14" font-size="12" fill="white" font-weight="600">
          ${d.nota.toFixed(1)}
        </text>
      </svg>
    </td>
    <td>${carita(d.nota)}</td>
  </tr>
`;





                    total = total + d.nota;
                });
                 texto.innerHTML = (total/12).toFixed(1);
       

            }
        notas().catch((error) => console.error(error));

       function carita(n) {
    if (n > 5.9) {
        return "🤗";
    } else if (n == 5.9) {
        return "😐";
    } else {
        return "🥴";
    }
}
