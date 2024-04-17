function MM_findObj(n, d) {
    var p, i, x;
    if (!d) d = document;
    if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
      d = parent.frames[n.substring(p + 1)].document;
      n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n];
    for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n);
    return x;
  }

  function MM_showHideLayers() {
    var i, p, v, obj, args = MM_showHideLayers.arguments;
    for (i = 0; i < (args.length - 2); i += 3)
      if ((obj = MM_findObj(args[i])) != null) {
        v = args[i + 2];
        if (obj.style) {
          obj = obj.style;
          v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v;
        }
        obj.visibility = v;
      }
  }

  function calcula(modo) {
    var vpeso = 0;
    var valtura = 0;
    var vidade = 0;
    var vresultado = 0;
    var vnenhuma = 0;
    var vmoderada = 0;
    var vintensa = 0;

    if (modo == "homem") var form = document.forms["teste"];
    else var form = document.forms["teste_m"];

    if (form.peso.value != "") {
      vpeso = parseFloat(form.peso.value);
    }

    if (form.altura.value != "") {
      valtura = parseFloat(form.altura.value);
    }

    if (form.idade.value != "") {
      vidade = parseFloat(form.idade.value);
    }

    if (form.nenhuma.value != "") {
      vnenhuma = parseFloat(form.nenhuma.value);
    }

    if (form.moderada.value != "") {
      vmoderada = parseFloat(form.moderada.value);
    }

    if (form.intensa.value != "") {
      vintensa = parseFloat(form.intensa.value);
    }

    if (modo == "homem") {
      vresultado = parseFloat(
        66 + 13.7 * vpeso + 5 * valtura - 6.8 * vidade
      );
      form.resultado.value = vresultado.toFixed(2);
      var total = vresultado + vresultado * 0.25;
      vnenhuma = parseFloat(total);
      form.nenhuma.value = vnenhuma.toFixed(2);

      total = vresultado + vresultado * 0.35;
      vmoderada = parseFloat(total);
      form.moderada.value = vmoderada.toFixed(2);

      total = vresultado + vresultado * 0.45;
      vintensa = parseFloat(total);
      form.intensa.value = vintensa.toFixed(2);
    } else {
      vresultado = parseFloat(
        655 + 9.6 * vpeso + 1.7 * valtura - 4.7 * vidade
      );
      form.resultado.value = vresultado.toFixed(2);
      var total = vresultado + vresultado * 0.2;
      vnenhuma = parseFloat(total);
      form.nenhuma.value = vnenhuma.toFixed(2);

      total = vresultado + vresultado * 0.3;
      vmoderada = parseFloat(total);
      form.moderada.value = vmoderada.toFixed(2);

      total = vresultado + vresultado * 0.4;
      vintensa = parseFloat(total);
      form.intensa.value = vintensa.toFixed(2);
    }
  }

  function verificaTecla(evt) {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (
      charCode > 31 &&
      (charCode < 48 || charCode > 57) &&
      charCode != 46
    ) {
      alert("Este campo só aceita números");
      return false;
    }
    return true;
  }