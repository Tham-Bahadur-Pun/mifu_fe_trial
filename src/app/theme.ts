import { extendTheme, } from "@chakra-ui/react";
const theme = extendTheme({
    components: {
        FormLabel: {
            baseStyle: {
                color: '#232859',
                fontSize:'14px'
            }
        },
       
        Button: {
            baseStyle : {
                backgroundColor: '#5957d5'
            }
        },
    }
})
export default theme