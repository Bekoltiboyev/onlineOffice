import uz from './translate/lng/uz.json'
import ru from './translate/lng/ru.json'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'


const resources = {
    uz: {
        translation: uz,
    },
    ru:{
        translation:ru,
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng:JSON.parse(localStorage.getItem('language')),
    fallbackLng:'uz'
})

export default i18n;