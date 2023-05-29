var cache = { suggs: null };
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
  const fm = new FormData(t);
  const data = {};
  for (let [key, value] of fm.entries()) {
    data[key] = value;
  }
  console.log(data);
}
function getWorks() {
  return new Promise((resolve, reject) => {
    if (cache.suggs !== null) {
      resolve(cache.suggs);
    } else {
      $.ajax({
        type: "POST",
        url: "config/getWork.php",
        data: "",
        success: (res) => {
          res = JSON.parse(res);
          if (res.success) {
            const sgg = new Array();
            res.data.map((data) => {
              sgg.push(data.title);
            });
            cache.suggs = sgg;
            resolve(cache.suggs);
          } else {
            console.error("error");
            reject("Error fetching data");
          }
        },
        error: (xhr, status, error) => {
          console.error(error);
          reject("Error fetching data");
        },
      });
    }
  });
}

function sugg(t) {
  var searchInput = t.parentElement;
  var resultBox = searchInput.querySelector(".resultBox");
  getWorks().then((suggestions) => {
    let userData = t.value;
    let emptyArray = [];
    if (userData) {
      emptyArray = suggestions.filter((data) => {
        return data
          .toLocaleLowerCase()
          .startsWith(userData.toLocaleLowerCase());
      });
      emptyArray = emptyArray.map((data) => {
        var text = '<li class="" id="">' + data + "</i></li>";
        return (data = text);
      });
      searchInput.classList.add("act");
      showSuggestions(emptyArray, resultBox);
    } else {
      searchInput.classList.remove("act");
    }
  });
}

function showSuggestions(list, rs) {
  let listData;
  if (!list.length) {
    listData = "<li>" + "No Suggestions" + "</li>";
  } else {
    listData = list.join("");
  }
  rs.innerHTML = listData;
}
function addToSet() {}
