const addWork = () => {
  $(".addWork").html();
};
function addWorkValid(e, t) {
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
      console.log(data);
    },
  });
}
