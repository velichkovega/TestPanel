var app = {
    init() {
        this.toddlerSlider("#fontSize", ".contentSlider", 12, 1, 80, 1 );
        this.toddlerSlider("#lineHeght", ".contentLineHeght", 5.6, 1, 20, 0.1 );
        this.toddlerSlider("#letterSpacing", ".contentLetterSpacing", 1.6, 1, 20, 0.1 );
        this.showPanel();
        this.customSelect();
    },
    toddlerSlider(target, targetContainer, value, min, max, step) {
        $( target ).slider({
				value : value,
                animate : true,
                range: "max",
				min : min,
				max : max,
				step : step,
				create: function( event, ui ) {
					val = $( target ).slider("value");
					$( targetContainer ).html( val );
				},
                slide: function( event, ui ) {
                    $( targetContainer ).html( ui.value );
                }
        });
    },
    showPanel() {
        $(document).on('click', '.container', function (e){
            var containerMainWrap = document.getElementById("container");
            if (e.target == containerMainWrap) {
                var widthWindow = $(document).width();  
                var heightWindow = $(document).height();      
                var X = e.pageX;
                var xPosition = (X > widthWindow - 320) ? X - 320 : X + 10;
                var Y = e.pageY;
                var yPosition = (Y > heightWindow - 290) ? Y - 270 : Y;
                console.log(xPosition);
                $('.panel').css({
                    "top" : (widthWindow > 480) ? yPosition : 0 + 'px',
                    "left" : (widthWindow > 480) ? xPosition : 0  + 'px',
                    "transition" : "0.6s"
                })
                
                $('.panel').fadeIn("fast");
            }
        });
    },
    customSelect() {
        $("select").selecter();
    }
}

$(document).ready(function(){
    app.init();
});