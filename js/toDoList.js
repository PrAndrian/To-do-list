$(document).ready(function () {
    
    // console.log(Start);
    $(".container").hide();
    $(".container__ajouter").hide();
    $(".container__modifier").hide();
    // $("#h1M").hide();
    // $("#iDM").hide();
    // $("#titleM").hide();
    // $("#inputStateM").hide();
    // $("#modifier").hide();
    $('#showTable').click(function () {
        $(".container").show();
        $(".container__ajouter").show();
        $(this).hide();
    })

    $.getJSON("http://jsonplaceholder.typicode.com/todos/", function (data) {
        //Traitement_data
        $.each(data, function (iteration, val) {
            $('tbody').append(
                "<tr>" +
                "<td class='ID'>" + val.id + "</td>" +
                "<td class='title'>" + val.title + "</td>" +
                "<td class='status'>" + val.completed + "</td>" +
                '<td class="delete"><button class="btn btn-primary">Remove</button></td>' +
                "</tr>"
            )
        });

        $(".table").on("click",'.delete',function () {//pour tout les .delete de la table
        // $(".delete").click(function () { //e fonctionne pas car pas appliquer sur tout les .delete
            if (confirm("L'élément sera supprimer.")) {
                console.log('ok');
                $(this).parents('tr').remove();
            } else {
                console.log('cancel');
            };
        })

        $("#ajouter").click(function () {
            var getLastId = $("tr:last").find("td:first").text();
            var id = parseInt(getLastId)+1;
            var completed = $("#inputState").val();
            var title = $("#title").val();
            // var completed = prompt("Put a title :");
            // var title = prompt("Put the status :");      
            if(title != null && title != "" ){           
                $('tbody').append(
                    "<tr>" +
                    "<td class='ID' >" + id + "</td>" +
                    "<td class='title'>" + title + "</td>" +
                    "<td class='status'>" + completed + "</td>" +
                    '<td class="delete"><button class="btn btn-primary">Remove</button></td>' +
                    "</tr>"
                )
                alert("Element "+ title +" is added, take a look ! ");
            }
        })

        $('.table').on('click', ".ID", () =>{
            var lastclick = $(".ID:active");
            var keyCount = data.length;
            $(".container__modifier").show();
            $(".container__ajouter").hide();
            $('#modifier').click(()=>{
                if($('#iDM').val() > keyCount && $('#iDM').val() > 0){
                    lastclick.text($("#iDM").val());
                    $(".container__modifier").hide();
                    $(".container__ajouter").show();
                }
            })
        })

        $('.table').on('click', ".title", () =>{
            var lastclick = $(".title:active");
            $(".container__modifier").show();
            $(".container__ajouter").hide();
            $('#modifier').click(()=>{
                if($("#titleM").val() != null && $("#titleM").val() != ""){
                    lastclick.text($("#titleM").val());
                    $(".container__modifier").hide();
                    $(".container__ajouter").show();
                }
            })
        })

        $('.table').on('click', ".status", () =>{
            var lastclick = $(".status:active");
            $(".container__modifier").show();
            $(".container__ajouter").hide();
            $('#modifier').click(()=>{
                // console.log("Actual value is "+lastclick.text());
                // console.log("New value is "+$("#inputStateM").val());
                if(confirm("Are You sure you want to put "+$('#inputStateM').val()+" as the new status?")){
                    lastclick.text($("#inputStateM").val());
                    $(".container__modifier").hide();
                    $(".container__ajouter").show();
                }
            })
        })
    })
})