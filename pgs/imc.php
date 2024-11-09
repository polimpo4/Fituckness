<form action="" method="post">
    <div>
        <input type="number" name="" id="" onblur="alturafunc(this)" placeholder="Altura em centimetros" required>

        <input type="number" name="" id="" onblur="pesofunc(this)" placeholder="Peso" required>

        <input type="submit" onclick="event.preventDefault(); teste();" value="Calcular">
    </div>
</form>

<div class=resultado><span></span></div>

<div class="container">
    <div class="IMC">
        <span>IMC</span><span>CLASSIFICAÇÃO</span>
        <span>IMC < 18.5 Kg/m2</span><span>Baixo Peso</span>
        <span>IMC ≥ 18.5 e < 24.9 Kg/m2</span><span>Peso Normal</span>
        <span>IMC ≥ 25 e < 29.9 Kg/m2</span><span>Excesso de Peso</span>
        <span>IMC ≥ 30 Kg/m2</span><span>Obesidade</span>
        <span>IMC ≥ 30 e < 34.9 Kg/m2</span><span>Obesidade classe I</span>
        <span>IMC ≥ 35 e < 39.9 Kg/m2</span><span>Obesidade class II</span>
        <span>IMC > 40 Kg/m2</span><span>Obesidade Mórbida</span>
    </div>
</div>
