function showArticle(nr)
        {
            document.getElementById("a1").style.display = "none";
            document.getElementById("a2").style.display = "none";
            document.getElementById("a3").style.display = "none";
            document.getElementById("a4").style.display = "none";
            switch(nr){
                case 1:
                document.getElementById("a1").style.display = "inline";
                break
                case 2:
                document.getElementById("a2").style.display = "inline";
                break
                case 3:
                document.getElementById("a3").style.display = "inline";
                break
                case 4:
                document.getElementById("a4").style.display = "inline";
                break
            }
        }