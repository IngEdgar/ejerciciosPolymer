  let data = [
              {
              "nombre": "Ana",
              "movimientos":[
                  {"tipo":"cargo","fecha":"2018-01-01 13:01:01","monto":1500.00},
                  {"tipo":"cargo","fecha":"2018-01-01 13:01:01","monto":500.00},
                  {"tipo":"abono","fecha":"2018-01-01 13:01:01","monto":500.00}
                ]
              },
              {
              "nombre": "Juan",
              "movimientos":[
                  {"tipo":"abono","fecha":"2018-02-01 13:01:01","monto":500.00},
                  {"tipo":"cargo","fecha":"2018-02-05 13:01:01","monto":1500.00},
                  {"tipo":"abono","fecha":"2018-02-06 13:01:01","monto":500.00}
                ]
              }
            ];

  (function(){
    var t = document.createElement('table');
    data.forEach(function(item){
      var th = document.createElement('th');
      var trnombre = document.createElement('tr');
      var tdnombre = document.createElement('td');
      tdnombre.innerHTML = item.nombre;
      trnombre.appendChild(tdnombre);
      th.appendChild(trnombre);
      t.appendChild(th);

      var trtitulos = document.createElement('tr');
      var tdtipo = document.createElement('td');
      tdtipo.innerHTML = "Tipo";
      var tdfecha = document.createElement('td');
      tdfecha.innerHTML = "Fecha";
      var tdmonto = document.createElement('td');
      tdmonto.innerHTML = "Monto";
      trtitulos.appendChild(tdtipo);
      trtitulos.appendChild(tdfecha);
      trtitulos.appendChild(tdmonto);
      t.appendChild(trtitulos);

      item.movimientos.forEach(function(item2){
        var str = document.createElement('tr');
        var stdtipo = document.createElement('td');
        var stdfecha = document.createElement('td');
        var stdmonto = document.createElement('td');
        stdtipo.innerHTML = item2.tipo;
        stdfecha.innerHTML = item2.fecha;
        stdmonto.innerHTML = item2.monto;
        str.appendChild(stdtipo);
        str.appendChild(stdfecha);
        str.appendChild(stdmonto);
        str.appendChild(document.createElement('td'));
        t.appendChild(str);
      });

      var trtotal = document.createElement('tr');
      var tdtotaltxt = document.createElement('td');
      tdtotaltxt.innerHTML = "Total";
      trtotal.appendChild(tdtotaltxt);
      trtotal.appendChild(document.createElement('td'));
      trtotal.appendChild(document.createElement('td'));

      var stdtotal = document.createElement('td');
      var total = item.movimientos.reduce(function(total, obj){
        if(obj.tipo=="abono")
          return {"monto":total.monto + obj.monto};
        if(obj.tipo=="cargo")
          return {"monto":total.monto - obj.monto};
      },{"monto":0.00});

      stdtotal.innerHTML = total.monto;
      if(total.monto < 0) stdtotal.style.color = "red";
      trtotal.appendChild(stdtotal);
      t.appendChild(trtotal);
    });
    document.body.appendChild(t);
  })()
