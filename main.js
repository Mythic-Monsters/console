console.log("hello")

    var games= ["Apex", "valorant", "fortnite"]
    console.log(games)
    document.getElementById("da").innerHTML=games;

    var f= games[0]
    console.log(f)
    document.getElementById("ae").innerHTML= f;

    var ss= games[1]
    console.log(ss)
    document.getElementById("as").innerHTML= ss;

    var tt= games[2]
    console.log(tt)
    document.getElementById("at").innerHTML= tt;

    var l=games.length
    console.log(l)
    document.getElementById("length").innerHTML= l;

    //How to loop the array ? the id to be refer for innerHTML is loop_the_array
    var loop="";
    for (var count= 0 ;count<l; count=count+1){
        console.log(games[count])
        loop = loop + games[count] + "<br>"
    }
    document.getElementById("looping").innerHTML= loop;

    //adding element at the end of the array using push method
    //How to add element at the end of the array ? the id to be refer for innerHTML is add_element_at_the_end_of_array
    games.push("Overwatch")
    console.log(games)
    document.getElementById("ttt").innerHTML= games;

    //How to more elements at the end of the array ? the id to be refer for innerHTML is add_more_element_at_the_end_of_array
games.push("Splitgate")
console.log(games)
document.getElementById("oaoa").innerHTML= games;
    //How to declare array with alphabets ? the id to be refer for innerHTML is display_alphabets_array
    var aut=["h", "n", "k", "x", "i", "r", "p", "a", "d", "l"]

    //How to sort array with alphabets ? the id to be refer for innerHTML is display_sorted_alphabets_array
    aut.sort()
    console.log(aut)

    //How to reverse the array ? the id to be refer for innerHTML is display_reverse_array
    aut.reverse()
    console.log(aut)

    //How to declare array with numbers ? the id to be refer for innerHTML is display_number_array
   var no=[2, 3, 8, 9, 0, 1, 7]

    //How to find the maximum number from the array with numbers ? the id to be refer for innerHTML is display_maximum_number
   var max= Math.max.apply(Math, no)
   console.log(max)

    //How to find the minimum number from the array with numbers ? the id to be refer for innerHTML is display_minimum_number
    var min= Math.min.apply(Math, no)
    console.log(min)

    console.log("ADDITIONAL ACTIVITY");