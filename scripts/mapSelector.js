const mapSelector = () => { 

    var mapChoice = document.querySelectorAll('.map_option');

    mapChoice.forEach(function () {
        addEventListener('click', (e) => {
            let selectedMap = e.target.innerText;
            changeMap(selectedMap);
        })

        const changeMap = (selectedMap) => {

            const map = document.getElementById('map');

            const mapOriginal = 'https://www.google.com/maps/d/embed?mid=1VTjplJLozau7w06DBPCM9P3jM_42KBId&hl=es&z=2';

            const mapBaires = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4383235.513419143!2d-60.941608629767586!3d-34.1790903042559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaece9ec6895%3A0x8cfbb3ac84af38e2!2sAv.%20Corrientes%202500%2C%20C1046AAP%20CABA!5e0!3m2!1ses!2sar!4v1637877962568!5m2!1ses!2sar';
            const mapMontevideo = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12041768.567943761!2d-65.32375485669914!3d-34.1997943513479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f802a53906c55%3A0xc581ac332d7e5b77!2sJuncal%201378%2C%2011000%20Montevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1ses!2sar!4v1637877754422!5m2!1ses!2sar';
            const mapChile = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6977257.504024003!2d-73.68159708156622!3d-33.944282022312024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c8a8af74e2c3%3A0x9d7cd418076592dc!2sLos%20Jardines%20927%2C%20Huechuraba%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sar!4v1637878317565!5m2!1ses!2sar';
            const mapCordoba = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14058457.997282317!2d-67.16114628639241!3d-30.655349273926312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299655ff5257d%3A0x156055cfd574ac06!2sAv.%20La%20Voz%20del%20Interior%207000!5e0!3m2!1ses!2sar!4v1637878052596!5m2!1ses!2sar';
            const mapLondrina = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12454836.16062967!2d-55.09019396912901!3d-24.998093540087233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb43676f1e853b%3A0xdfce430ea5e5f0c1!2sR.%20Sen.%20Souza%20Naves%2C%20626%20-%20Centro%2C%20Londrina%20-%20PR%2C%2086010-160%2C%20Brasil!5e0!3m2!1ses!2sar!4v1637878404239!5m2!1ses!2sar';
            const mapDionisio = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6338666.017166267!2d-57.271029616136424!3d-26.3305005402759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09bc6757202fd%3A0xbb8c275b0d9b91f2!2sR.%20Avelino%20Valduga%20-%20Dion%C3%ADsio%20Cerqueira%2C%20SC%2C%2089950-000%2C%20Brasil!5e0!3m2!1ses!2sar!4v1637878444434!5m2!1ses!2sar';
            const mapMiami = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11550579.719001377!2d-87.21049435266724!3d23.566888999838653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bea3b76e372b%3A0xc12b1959a14edccd!2s3510%20NW%20115th%20Ave%2C%20Doral%2C%20FL%2033178%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1637878477577!5m2!1ses!2sar';
            

            switch (selectedMap) {
                case 'Buenos Aires':
                    map.setAttribute('src', mapBaires);                    
                    returnOriginalMap();                    
                    break;
                case 'Cordoba':
                    map.setAttribute('src', mapCordoba);                    
                    returnOriginalMap();                    
                    break;
                case 'Huechuraba':
                    map.setAttribute('src', mapChile);                    
                    returnOriginalMap();                    
                    break;                       
                case 'Montevideo':
                    map.setAttribute('src', mapMontevideo);                    
                    returnOriginalMap();                    
                    break;     

                case 'Londrina':
                    map.setAttribute('src', mapLondrina);                    
                    returnOriginalMap();                    
                    break;   

                case 'Dionísio Cerqueira':
                    map.setAttribute('src', mapDionisio);                    
                    returnOriginalMap();                    
                    break;
                case 'Miami':
                    map.setAttribute('src', mapMiami);                    
                    returnOriginalMap();                    
                    break;

                default:
                    break;
            }





            const returnOriginalMap = () => {
                setTimeout(() => {
                    map.setAttribute('src', mapOriginal);
                }, 10000);
             }
            
        }


    });
}

mapSelector()

