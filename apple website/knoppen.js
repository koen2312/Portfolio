        //iphone
        var prijs1 = document.getElementById("prijs");
        var foto1 = document.getElementById("foto");
        var pro2 = document.getElementById("pro1");
        var max2 = document.getElementById("max1");
        
        function pro() {
            var g = document.getElementById("bollen").style.opacity =100;
            prijs1.innerHTML = ("Vanaf &#8364; 1.162,10");
            foto1.src = "Assets/Images/iPhones/iphone-12-pro-family-hero-all.jpg";
            pro2.style.borderColor ="blue";
            max2.style.borderColor ="gray";
        };
        function max() {
            var g = document.getElementById("bollen").style.opacity =100;
            prijs1.innerHTML = ("Vanaf &#8364; 1.262,10");
            foto1.src = "Assets/Images/iPhones/iphone-12-pro-max-family-hero-all.jpg";
            pro2.style.borderColor = "gray";
            max2.style.borderColor = "blue";
        };
        function grafiet() {
          if(document.getElementById("bollen").style.opacity == 100){
            var g = document.getElementById("gig").style.opacity =100;
            grafietk.style.borderColor ="blue";
            zilverk.style.borderColor ="gray";
            goudk.style.borderColor="gray";
            oceaanblauwk.style.borderColor="gray";
            if (pro2.style.borderColor=="blue") {
                foto1.src = ("Assets/Images/iPhones/Iphone-12-pro-graphite-hero.png");
            } else{
                foto1.src =("Assets/Images/iPhones/Iphone-12-pro-max-graphite-hero.png");
            }
            }
        }
        function zilver() {
            if(document.getElementById("bollen").style.opacity == 100){
            var g = document.getElementById("gig").style.opacity =100;
            grafietk.style.borderColor ="gray";
            zilverk.style.borderColor ="blue";
            goudk.style.borderColor="gray";
            oceaanblauwk.style.borderColor="gray";
            if (pro2.style.borderColor=="blue") {
                foto1.src =("Assets/Images/iPhones/iphone-12-pro-silver-hero.png")
            } else{
                foto1.src = "Assets/Images/iPhones/iphone-12-pro-max-silver-hero.png";
            }
            }
        };
        function goud() {
          if(document.getElementById("bollen").style.opacity == 100){
            var g = document.getElementById("gig").style.opacity =100;
            grafietk.style.borderColor ="gray";
            zilverk.style.borderColor ="gray";
            goudk.style.borderColor="blue";
            oceaanblauwk.style.borderColor="gray";
            if (pro2.style.borderColor=="blue") {
                foto1.src ="Assets/Images/iPhones/Iphone-12-pro-gold-hero.png";
            } else{
                foto1.src ="Assets/Images/iPhones/Iphone-12-pro-max-gold-hero.png";
            }
            }
        }
        function oceaanblauw() {
          if(document.getElementById("bollen").style.opacity == 100){
            var g = document.getElementById("gig").style.opacity =100;
            grafietk.style.borderColor ="gray";
            zilverk.style.borderColor ="gray";
            goudk.style.borderColor="gray";
            oceaanblauwk.style.borderColor="blue";
            if (pro2.style.borderColor=="blue") {
                foto1.src ="Assets/Images/iPhones/Iphone-12-pro-blue-hero.png";
            } else{
                foto1.src ="Assets/Images/iPhones/Iphone-12-pro-max-blue-hero.png";
            }
            }
        }
        function gib1() {
            if (document.getElementById("gig").style.opacity ==100) {
            var g =document.getElementById("trade").style.opacity=100;
            gib1k.style.borderColor ="blue";
            gib2k.style.borderColor ="gray";
            gib3k.style.borderColor ="gray";
            if (pro2.style.borderColor =="blue") {
                prijs1.innerHTML=("Vanaf &#8364; 1.162,10");    
                }
                else{
                    prijs1.innerHTML=("Vanaf &#8364; 1.262,10");
                };
            }
        }
        function gib2() {
            if (document.getElementById("gig").style.opacity ==100) {
            var g =document.getElementById("trade").style.opacity=100;
            gib1k.style.borderColor ="gray";
            gib2k.style.borderColor ="blue";
            gib3k.style.borderColor ="gray";
                if (pro2.style.borderColor =="blue") {
                prijs1.innerHTML=("Vanaf &#8364; 1.282,10");        
                }
                else{
                    prijs1.innerHTML=("Vanaf &#8364; 1.382,10");
                };
            }
        }
        function gib3() {
            if (document.getElementById("gig").style.opacity ==100) {
            var g =document.getElementById("trade").style.opacity=100;
            gib1k.style.borderColor ="gray";
            gib2k.style.borderColor ="gray";
            gib3k.style.borderColor ="blue";
                if (pro2.style.borderColor =="blue") {
                prijs1.innerHTML=("Vanaf &#8364; 1.512,10");    
                }
                else{
                    prijs1.innerHTML=("Vanaf &#8364; 1.612,10");
                };
            }
        }
        function nee() {
            if (document.getElementById("trade").style.opacity ==100) {
                neek.style.borderColor="blue";
                jak.style.borderColor="gray";
            }
        }
        function ja() {
            if (document.getElementById("trade").style.opacity ==100) {
                jak.style.borderColor="blue";
                neek.style.borderColor="gray";
            }
        }