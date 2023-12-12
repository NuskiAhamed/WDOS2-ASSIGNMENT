document.addEventListener("DOMContentLoaded", function () {
 //Date
    const checkInDate = document.getElementById("chechin");
    const checkOutDate = document.getElementById("Checkout");
    const currentcheckInDate = document.getElementById("currentCheckIn");
    const currentcheckOutDate = document.getElementById("currentCheckOut");
    const overallCheckInDate = document.getElementById("overallCheckIn");
    const overallCheckOutDate = document.getElementById("overallCheckOut");
    const currrentstay = document.getElementById("currentStayDuration");
    const overallstay = document.getElementById("overallStayDuration");

    checkInDate.addEventListener("change", function () {
        currentcheckInDate.innerText = checkInDate.value;
        overallCheckInDate.innerText = checkInDate.value;
    });
    checkOutDate.addEventListener("change", function () {
        currentcheckOutDate.innerText = checkOutDate.value;
        overallCheckOutDate.innerText = checkOutDate.value;

        const checkInDateValue = new Date(checkInDate.value);
        const checkOutDateValue = new Date(checkOutDate.value);
        const currentStayDuration = (checkOutDateValue - checkInDateValue) / (1000 * 60 * 60 * 24);
        currrentstay.innerText = currentStayDuration;
        overallstay.innerText = currentStayDuration;
    });

    //Room Related
    let SingleRoom = document.getElementById("singleRooms");
    let DoubleRoom = document.getElementById("doubleRooms");
    let TripleRoom = document.getElementById("tripleRooms");
    let extrabed = document.getElementById("extrabed");
    let currentSingleRoom = document.getElementById("currentSingleRooms");
    let currentDoubleRoom = document.getElementById("currentDoubleRooms");
    let currentTripleRoom = document.getElementById("currentTripleRooms");
    let currentextrabed = document.getElementById("currentExtraBed");
    let overallSingleRoom = document.getElementById("overallSingleRooms");
    let overallDoubleRoom = document.getElementById("overallDoubleRooms");
    let overallTripleRoom = document.getElementById("overallTripleRooms");
    let overallextrabed = document.getElementById("overallExtraBed");
    
    //Eventlistener for room related
    SingleRoom.addEventListener("change", function () {
        currentSingleRoom.innerText = SingleRoom.value;
        currenttotal()
    });
    DoubleRoom.addEventListener("change", function () {
        currentDoubleRoom.innerText = DoubleRoom.value;
        currenttotal()
    });
    TripleRoom.addEventListener("change", function () {
        currentTripleRoom.innerText = TripleRoom.value;
        currenttotal()
    });
    extrabed.addEventListener("change", function () {
        currentextrabed.innerText = extrabed.value;
        currenttotal()
    });
    
    //Adventure Related
    let Nofadults = document.getElementById("NoofAdults");
    let Nofchildren = document.getElementById("NoofChildren");
    let currentNofadults = document.getElementById("currentAdults");
    let currentNofchildren = document.getElementById("currentChildren");
    let overallNofadults = document.getElementById("overallAdults");
    let overallNofchildren = document.getElementById("overallChildren");
    
    Nofadults.addEventListener("change", function () {
        currentNofadults.innerText = Nofadults.value;
        currenttotal()
    });
    Nofchildren.addEventListener("change", function () {
        currentNofchildren.innerText = Nofchildren.value;
        currenttotal()
    });

    //Adventure
    let slad = document.getElementById("slAD");
    let slch = document.getElementById("slCH");
    let frad = document.getElementById("frAD");
    let frch = document.getElementById("frCH");
    let guidead = document.getElementById("guideAD");
    let guidech = document.getElementById("guideCH");
    let currentadvad = document.getElementById("currentAdventureAdults");
    let currentadvch = document.getElementById("currentAdventureChildren");
    let currentguidead = document.getElementById("currentGuideAdults");
    let currentguidech = document.getElementById("currentGuideChildren");
    let overalladvad = document.getElementById("overallAdventureAdults");
    let overalladvch = document.getElementById("overallAdventureChildren");
    let overallguidead = document.getElementById("overallGuideAdults");
    let overallguidech = document.getElementById("overallGuideChildren");
    
    //Event listeners for adventure related
    slad.addEventListener("change", function () {
        advadults();
        currenttotal()
    });
    slch.addEventListener("change", function () {
        advchildren();
        currenttotal()
    });
    frad.addEventListener("change", function () {
        advadults();
        currenttotal()
    });
    frch.addEventListener("change", function () {
        advchildren();
        currenttotal()
    });
    guidead.addEventListener("change", function () {
        currentguidead.innerText = guidead.value;
        currenttotal()
    });
    guidech.addEventListener("change", function () {
        currentguidech.innerText = guidech.value;
        currenttotal()
    });
    function advadults(){
        let total = parseInt(slad.value) + parseInt(frad.value) 
        currentadvad.innerText = total;
        return total;
    }
    function advchildren(){
        let total = parseInt(slch.value) + parseInt(frch.value) 
        currentadvch.innerText = total;
        return total;
        }
    let curretntotal  = document.getElementById("currentTotal");
    function currenttotal(){
        let single_room = parseInt(SingleRoom.value)*25000;
        let double_room = parseInt(DoubleRoom.value)*35000;
        let triple_room = parseInt(TripleRoom.value)*40000;
        let total_rooms = single_room + double_room + triple_room;
        let total_children = parseInt(Nofchildren.value)*5000;
        let extrabed_cost = parseInt(extrabed.value)*8000;
        let extra_need = total_children + extrabed_cost;
        let total_input = total_rooms + extra_need;
        let total_stay = total_input * parseInt(currrentstay.innerText);
        
        let total_slad = parseInt(slad.value)*5000;
        let total_slch = parseInt(slch.value)*2000;
        let total_frad = parseInt(frad.value)*10000;
        let total_frch = parseInt(frch.value)*5000;
        let total_guidead = parseInt(guidead.value)*1000;
        let total_guidech = parseInt(guidech.value)*500;
        let total_adventure = total_slad + total_slch + total_frad + total_frch + total_guidead + total_guidech;

        total = total_stay + total_adventure;
        
        curretntotal.innerText = total;
        return total;
    }
    //discount & Promocode
    let promo = document.getElementById("promoCode");
    let Currdiscount = document.getElementById("currentDiscount");
    let discount = 0;
    promo.addEventListener("input", function () {
        if(promo.value == "Promo123"){
          discount =currenttotal() * 0.05;
            Currdiscount.innerText = discount;
            total_change = parseInt(currenttotal()) - discount;
            curretntotal.innerText = total_change;
        }else{
            Currdiscount.innerText = 0;
            curretntotal.innerText = currenttotal();
            return 0;
        }
    });

    //loyalty points
    const btnloyalty = document.getElementById("loyalty");
    const show_loyaalty = document.getElementById("show_loyaalty");

    btnloyalty.addEventListener("click", function () {
        total_rrom = parseInt(SingleRoom.value) + parseInt(DoubleRoom.value) + parseInt(TripleRoom.value);
        if(total_rrom >= 3){
            loyalty_points = total_rrom*20;
            show_loyaalty.value = loyalty_points;
        }
            else{
                show_loyaalty.value = 0;
            }
    });

    //adding booking button
    const btnaddbooking = document.getElementById("addBooking");
    const add2favBtn = document.getElementById('add2fav');

    let sr = 0;
    let dr = 0;
    let tr = 0;
    let eb = 0;
    let adults = 0;
    let children = 0;
    let advadult = 0;
    let advchildrens = 0;
    let guideadults = 0;
    let guidechildren = 0;
    let discounts = 0;
    let total = 0;
    btnaddbooking.addEventListener("click", function () {

        advad = parseInt(slad.value) + parseInt(frad.value);
        advch = parseInt(slch.value) + parseInt(frch.value);

        sr =+ parseInt(SingleRoom.value);
        dr =+ parseInt(DoubleRoom.value);
        tr =+ parseInt(TripleRoom.value);
        eb =+ parseInt(extrabed.value);
        adults =+ parseInt(Nofadults.value);
        children =+ parseInt(Nofchildren.value);
        advadult =+ parseInt(advad);
        advchildrens =+ parseInt(advch);
        guideadults =+ parseInt(guidead.value);
        guidechildren =+ parseInt(guidech.value);
        discounts =+ parseInt(Currdiscount.innerText);
        total =+ parseInt(curretntotal.innerText);

        overallSingleRoom.innerText = sr;
        overallDoubleRoom.innerText = dr;
        overallTripleRoom.innerText = tr;
        overallextrabed.innerText = eb;
        overallNofadults.innerText = adults;
        overallNofchildren.innerText = children;
        overalladvad.innerText = advadult;
        overalladvch.innerText = advchildrens;
        overallguidead.innerText = guideadults;
        overallguidech.innerText = guidechildren;
        overallDiscount.innerText = discounts;
        overallTotal.innerText = total;

        
        (document.getElementById('bookingForm')).reset();
        alert('You have succesfully placed your booking!');
    });
    
    //event listener for add to favourite button
    add2favBtn.addEventListener('click', () => {
        const formInputs = document.querySelectorAll("#bookingForm input, #bookingForm select");

        const formData = {};

        formInputs.forEach(function (input) {
        formData[input.name] = input.value;
        });

        // Get form data and store in local storage
        localStorage.setItem("favoriteBooking", JSON.stringify(formData));

        // Show an alert indicating that the booking has been added to favorites
        alert("Booking added to favorites!");
    });
});