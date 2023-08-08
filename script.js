// Programme de calcul d'une équation du second degré (by k-leb)
function calculequation(a,b,c){
    var resultat = (b*b)-(4*a*c);
    var racine = Math.sqrt(resultat);
    if (resultat>0){
        var x = -b-racine/2*a;
        var y = -b+racine/2*a;
        console.log("les solutions de l'équation sont x1 = ",x +" et x2= ", y );
    }
    else if (resultat===0){
        var a = -b/2*a;
        console.log("la solution à l'équation est " + a);
    }
    else if (resultat<0){
        console.log("l'équation n'admet pas de solution");
    }
}
calculequation(2,9,-2);