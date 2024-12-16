/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {  
                "background":"#e9ecee",          
                "Faq-background":"#f7f7f8",          
                "primary-black": '#1D2939',             
                "secondary-black": '#344054',             
                "third-black": '#475467',             
                "four-black": '#263238',                      
                "primary-white": '#FFFFFF',             
                "secondary-white": '#EAECF0',             
                "third-white": '#475467',             
                "four-white": '#263238',                      
                "primary-blue": '#0872BA',                      
            },   
            container: {
                center: true 
            },
            fontFamily: {
                "poppins-light": ['Poppins Light'],
                "poppins-normal": ['Poppins Normal'],
                "poppins-medium": ['Poppins Medium'],
                "poppins-semibold": ['Poppins Semibold'],
                "poppins-bold": ['Poppins Bold'],
                "poppins-extrabold": ['Poppins Extrabold'],
                "poppins-black": ['Poppins Black'],
                "montserrat-light": ['Montserrat Light'],
                "montserrat-normal": ['Montserrat Normal'],
                "montserrat-medium": ['Montserrat Medium'],
                "montserrat-semibold": ['Montserrat Semibold'],
                "montserrat-bold": ['Montserrat Bold'],
                "montserrat-extrabold": ['Montserrat Extrabold'],
                "montserrat-black": ['Montserrat Black'],
                
            },
            fontSize:{
                8: "8px",
                15: "15px",
                56: "56px",
            },
            spacing:{
                40:"40px",             
                128:"128px",             
                350:"350px",             
                414:"414px",             
                182:"182px",             
            },
            width:{
                51:'41%',
                58:'58%',
                20:'20%',
                20:'20%',
            },
            maxWidth:{
                container:"1200px",
                300: "300px",
                528: "528px",
                588: "588px",
                "23%":"23%",
                "48%":"48%",
            },
            minWidth:{
                 480: "480px",
                 300: "300px",
                 450: "450px",
                 600: "600px",
            },
            backgroundImage: {
                'banner': "var(--banner-image)",
                'book': "var(--book-image)",
            },
           
        },
    },
    plugins: [],
}
 