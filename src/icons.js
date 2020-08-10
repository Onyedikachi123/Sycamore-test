import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHandPointer, faDownload, faChartPie, faTruck, faPhoneAlt, faMapMarker,faArrowRight, 
 } from '@fortawesome/free-solid-svg-icons';
 import { faLinkedin, faFacebookSquare, faInstagram, faWhatsapp, faTwitter } from "@fortawesome/free-brands-svg-icons"

library.add(fab, faHandPointer, faDownload, faChartPie, faTruck, faPhoneAlt, faMapMarker, faArrowRight, faLinkedin, faFacebookSquare, faInstagram, faWhatsapp, faTwitter )

Vue.component('fa-icon', FontAwesomeIcon)