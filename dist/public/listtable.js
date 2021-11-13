function getList() {
  if ($.fn.DataTable.isDataTable("#list_of_people")) {
    $("#list_of_people").DataTable().clear().destroy();
  }
  //API
  $.ajax({
    type: "GET",
    url: "/api/getList",
    dataType: "json",
    success: function (result) {
      const final_result = [];
      //formatting the result
      if (result.length > 0) {
        result.forEach((element, index) => {
          let tempArr = [];
          tempArr.push(index + 1);
          tempArr.push(element.UserName);
          tempArr.push(element.FirstName);
          tempArr.push(element.LastName);
          tempArr.push(element.Gender);
          tempArr.push(element.Emails);
          final_result.push(tempArr);
        });
        //Datatable config
        $(document).ready(function () {
          let table = $("#list_of_people")
            .removeAttr("width")
            .DataTable({
              data: final_result,
              dom: "Bfrtip",
              bScrollCollapse: true,
              bPaginate: true,
              bSearchable: false,
              bAutoWidth: true,
              order: [[0, "asc"]],
              pagingType: "full_numbers",
              iDisplayLength: 25,
              language: {
                search: "_INPUT_",
                searchPlaceholder: "Search...",
              },
              columnDefs: [
                {
                  targets: -1,
                  data: null,
                  render: function (a, b, data, d) {
                    if (data[1] != "Not Available") {
                      return "<button type='button' id='detailsInfo' class='btn btn-success'>Details!</button>";
                    }
                    return "";
                  },
                  // "defaultContent": "<button type='button' id='image02' class='btn btn-success'>Image 02!</button>"
                },
              ],
            });
          $("#list_of_people tbody").off("click");
          $("#list_of_people tbody").on("click", "button", function () {
            const _this = this;
            const press_button = this.id;
            const data = table.row($(this).parents("tr")).data();
            let jsonVar;
            result.forEach((element) => {
              if (element.UserName == data[1]) {
                jsonVar = element;
              }
            });
            const regeStr = jsonProcess(jsonVar);
            if (press_button == "detailsInfo") {
              const messageBox = bootbox
                .dialog({
                  title: "Details of: " + data[2],
                  size: "small",
                  message:
                    "<div width:250px max-width= 1363px id='regeStr'></div>",
                  buttons: {
                    ok: {
                      label: "Ok",
                      className: "btn-success pull-left",
                    },
                  },
                  callback: function (result) {
                    if (result) {
                    }
                  },
                })
                .find("div.modal-dialog")
                .addClass("largeWidth");
              document.getElementById("regeStr").innerHTML += regeStr;
            }
          });
        });
        //   $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
      }
    },
    error: function (result) {
      console.log("fail");
    },
  });
}
let search = "";
function getData() {
  search = document.getElementById("search").value;
  if (search == "") {
    bootbox.dialog({
      title: "OData Search",
      message: "<p>Please provide a valid username!</p>",
      buttons: {
        ok: {
          label: "OK!",
          className: "btn-danger",
          callback: function () {},
        },
      },
    });
  } else {
    $.ajax({
      type: "GET",
      url: "/api/search",
      data: { search: search },
      dataType: "json",
      success: function (result) {
        if (result.UserName) {
          const regeStrSearch = jsonProcess(result);
          bootbox
            .dialog({
              title: "Details of: " + result.UserName,
              size: "small",
              message:
                "<div width:250px max-width= 1363px id='regeStrSearch'></div>",
              buttons: {
                ok: {
                  label: "Ok",
                  className: "btn-success pull-left",
                },
              },
              callback: function (result) {
                if (result) {
                }
              },
            })
            .find("div.modal-dialog")
            .addClass("largeWidth");
          document.getElementById("regeStrSearch").innerHTML += regeStrSearch;
        } else {
          bootbox.dialog({
            title: "OData Search",
            message: "<p>User not found!</p>",
            buttons: {
              ok: {
                label: "OK!",
                className: "btn-danger",
                callback: function () {},
              },
            },
          });
        }
      },
    });
  }
}

function jsonProcess(jsonVar) {
  (jsonStr = JSON.stringify(jsonVar)),
    (regeStr = ""),
    (f = {
      brace: 0,
    }); // for tracking matches, in particular the curly braces
  return (regeStr = jsonStr.replace(
    /({|}[,]*|[^{}:]+:[^{}:,]*[,{]*)/g,
    function (m, p1) {
      var rtnFn = function () {
          return (
            '<div style="text-indent: ' +
            f["brace"] * 20 +
            'px;">' +
            p1 +
            "</div>"
          );
        },
        rtnStr = 0;
      if (p1.lastIndexOf("{") === p1.length - 1) {
        rtnStr = rtnFn();
        f["brace"] += 1;
      } else if (p1.indexOf("}") === 0) {
        f["brace"] -= 1;
        rtnStr = rtnFn();
      } else {
        rtnStr = rtnFn();
      }
      return rtnStr;
    }
  ));
}
