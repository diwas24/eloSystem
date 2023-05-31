function addWork(e, t) {
  e.preventDefault();
  const fm = new FormData(t);
  const data = {};
  for (let [key, value] of fm.entries()) {
    data[key] = value;
  }
  $.ajax({
    type: "POST",
    url: "config/addWork.php",
    data: data,
    success: (data) => {
      data = JSON.parse(data);
      if (!data.success) {
        $(t.querySelector(".res")).html("Error");
      } else {
        $(t.querySelector(".res")).html("success");
        t.reset();
      }
    },
  });
}
function addSets(e, t) {
  e.preventDefault();
  const data = {};
  const fm = new FormData(t);
  for (let [key, value] of fm.entries()) {
    if (key in data) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], parseInt(value)];
      }
    } else {
      data[key] = value;
    }
  }
  console.log(data);
  $.ajax({
    type: "POST",
    url: "config/addSets.php",
    data: data,
    success: (data) => {
      console.log(data);
      data = JSON.parse(data);
      if (!data.success) {
        var html =
          '<div class="alert alert-danger" role="alert">Error Occured</div>';
        t.querySelector("#msg").innerHTML = html;
      } else {
        var html =
          '<div class="alert alert-success" role="alert">Success</div>';
        t.querySelector("#msg").innerHTML = html;
        t.reset();
        $(".selectpicker").selectpicker("deselectAll");
      }
    },
  });
}
