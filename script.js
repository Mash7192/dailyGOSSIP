  // Update date and time
        function updateDateTime() {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const dateString = now.toLocaleDateString('en-US', options);
            const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            
            document.getElementById('date-time').textContent = `${dateString} | ${timeString}`;
        }
        
        // Update time immediately and then every minute
        updateDateTime();
        setInterval(updateDateTime, 60000);
        
        // Background rotation
        let currentBgSlide = 0;
        const bgSlides = document.querySelectorAll('.bg-slide');
        
        function rotateBackground() {
            bgSlides[currentBgSlide].classList.remove('active');
            currentBgSlide = (currentBgSlide + 1) % bgSlides.length;
            bgSlides[currentBgSlide].classList.add('active');
        }
        
        // Rotate background every 8 seconds
        setInterval(rotateBackground, 8000);
        
        // Weather data for South African cities
        const weatherData = {
            'johannesburg': {
                temp: 24,
                description: 'Sunny with clear skies',
                humidity: '65%',
                wind: '12 km/h',
                icon: 'fa-sun'
            },
            'cape-town': {
                temp: 18,
                description: 'Partly cloudy',
                humidity: '75%',
                wind: '18 km/h',
                icon: 'fa-cloud-sun'
            },
            'durban': {
                temp: 26,
                description: 'Warm and humid',
                humidity: '80%',
                wind: '10 km/h',
                icon: 'fa-cloud'
            },
            'pretoria': {
                temp: 25,
                description: 'Mostly sunny',
                humidity: '60%',
                wind: '8 km/h',
                icon: 'fa-sun'
            },
            'port-elizabeth': {
                temp: 20,
                description: 'Windy with some clouds',
                humidity: '70%',
                wind: '25 km/h',
                icon: 'fa-wind'
            }
        };
        
        // Update weather based on selected city
        function updateWeather() {
            const citySelect = document.getElementById('city-select');
            const selectedCity = citySelect.value;
            const weather = weatherData[selectedCity];
            
            document.getElementById('temperature').textContent = `${weather.temp}°C`;
            document.getElementById('weather-description').textContent = weather.description;
            document.getElementById('humidity').textContent = weather.humidity;
            document.getElementById('wind-speed').textContent = weather.wind;
            
            const weatherIcon = document.getElementById('weather-icon');
            weatherIcon.className = `fas ${weather.icon}`;
        }
        
        // Initialize weather and set up event listener
        document.getElementById('city-select').addEventListener('change', updateWeather);
        updateWeather();
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });