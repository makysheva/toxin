import 'chart.js'
import './room-details.scss'
import '../headers-footers/headers-footers.scss'
import '../../blocks/headers-footers/header/header'
import '../../blocks/headers-footers/header/header.scss'
import '../../blocks/headers-footers/menu/menu'
import '../../blocks/headers-footers/menu/menu.scss'
import '../../blocks/headers-footers/mobile-menu/mobile-menu'
import '../../blocks/headers-footers/mobile-menu/mobile-menu.scss'
import '../../blocks/form-elements/buttons/buttons.scss'
import '../../blocks/form-elements/text-field/text-field.scss'
import '../../blocks/form-elements/additions/additions.scss'
import '../../pages/form-elements/form-elements.scss'
import '../../blocks/form-elements/feedback/feedback'
import '../../blocks/form-elements/like-btn/like-btn.scss'
import '../../pages/cards/cards.scss'
import '../../blocks/cards/booking/booking.scss'
import '../../blocks/form-elements/dropdown/dropdown'
import '../../blocks/form-elements/dropdown/dropdown.scss'
import '../../blocks/form-elements/calendar/calendar'
import '../../blocks/form-elements/calendar/calendar.scss'
import '../../blocks/form-elements/bullet-list/bullet-list.scss'
import '../../blocks/form-elements/buttons/buttons.scss'
import '../../blocks/headers-footers/footer/footer'
import '../../blocks/headers-footers/footer/footer.scss'
import '../../assets/scss/fonts.scss'

console.log('in room-details.js')

var ctx = document.getElementById('myChart').getContext('2d');
// ctx.fillText('260 голосов', 100, 100)
// document.getElementById('actual-font').innerHTML = ctx.fillText('260 голосов', 100, 100)

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        datasets: [{
            backgroundColor: [
                'rgb(61, 73, 117, 100)',
                'rgb(139, 164, 249, 100)',
                'rgb(102, 210, 234, 100)',
                'rgb(255, 186, 156, 100)',
            ],
            borderAlign: 'inner',
            borderWidth: 0.5,
            data: [0, 3, 3, 6],
        }]
    },
    // Configuration options go here
    options: {
        tooltips: {
            enabled: false,
        },
        cutoutPercentage: 90,
        // title: {
        //     display: true,
        //     text: '260 голосов',
        //     position: 'bottom',
        //     align: 'center',
        //     font: {
        //         color: '#BC9CFF',
        //         size: 24,
        //         family: 'Quicksand',
        //         weight: 'bold',
        //     },
    }
});