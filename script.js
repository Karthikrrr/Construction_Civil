const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});


function showStructurePrices(selectedStructure) {
            const StructureDropdowns = document.querySelectorAll(".structure-price-dropdown");
            StructureDropdowns.forEach(dropdown => dropdown.style.display = "none"); // Hide all
            if (selectedStructure) {
                document.getElementById(`${selectedStructure}-prices`).style.display = "inline-block";
            }
        }
        // Show dropdown for flooring prices dynamically
        function showFlooringPrices(selectedFlooring) {
            const priceDropdowns = document.querySelectorAll(".flooring-price-dropdown");
            priceDropdowns.forEach(dropdown => dropdown.style.display = "none"); // Hide all
            if (selectedFlooring) {
                document.getElementById(`${selectedFlooring}-prices`).style.display = "inline-block";
            }
        }

        // Show door prices dynamically
        function showDoorPrices(selectedDoor) {
            const doorDropdowns = document.querySelectorAll(".door-price-dropdown");
            doorDropdowns.forEach(dropdown => dropdown.style.display = "none"); // Hide all dropdowns
            if (selectedDoor) {
                document.getElementById(`${selectedDoor}-prices`).style.display = "inline-block";
            }
        }

        // Show window prices dynamically
        function showWindowPrices(selectedWindow) {
            const windowDropdowns = document.querySelectorAll(".window-price-dropdown");
            windowDropdowns.forEach(dropdown => dropdown.style.display = "none"); // Hide all dropdowns
            if (selectedWindow) {
                document.getElementById(`${selectedWindow}-prices`).style.display = "inline-block";
            }
        }
       
        function displaySelectedOptions() {
            // Fetch dropdown values
            const siteDimension = document.getElementById("site-dimension").value;
            const floors = document.getElementById("floors").value;

            // plan logic
            const planElement = document.querySelector("input[name='options-for-plan']:checked");
            const plan = planElement ? planElement.value : null;
            const planText = planElement ? planElement.nextElementSibling.innerText : '';

            // housetype logic
            const houseTypeElement = document.querySelector("input[name='options-for-ht']:checked");
            const houseType = houseTypeElement ? houseTypeElement.value : null;
            const houseTypeText = houseTypeElement ? houseTypeElement.nextElementSibling.innerText : '';



            // Structure logic
            const structureElement = document.querySelector("input[name='options-for-structure']:checked");
            const structure = structureElement ? parseFloat(structureElement.value) : 0;
            const structureText = structureElement ? structureElement.nextElementSibling.innerText : '';
            // Structure logic
            const selectedStructure = document.querySelector("input[name='options-for-structure']:checked")?.id || null;
            const selectedStructurePrices = selectedStructure
                ? parseFloat(document.getElementById(`${selectedStructure}-prices`).value || 0)
                : 0;
            // Flooring logic
            const flooringElement = document.querySelector("input[name='options-for-flooring']:checked");
            const flooring = flooringElement ? parseFloat(flooringElement.value) : 0;
            const flooringText = flooringElement ? flooringElement.nextElementSibling.innerText : '';
        
            const selectedFlooring = document.querySelector("input[name='options-for-flooring']:checked")?.id || null;
            const selectedFlooringPrice = selectedFlooring
                ? parseFloat(document.getElementById(`${selectedFlooring}-prices`).value || 0)
                : 0;

                // Door and Window price logic
                const doorElement = document.querySelector("input[name='options-for-doors']:checked");
                const door = doorElement ? parseFloat(doorElement.value) : 0;
                const doorText = doorElement ? doorElement.nextElementSibling.innerText : '';

                const selectedDoor = document.querySelector("input[name='options-for-doors']:checked")?.id || null;
                const selectedDoorPrice = selectedDoor
                    ? parseFloat(document.getElementById(`${selectedDoor}-prices`).value || 0)
                    : 0;

                const windowElement = document.querySelector("input[name='options-for-windows']:checked");
                const window = windowElement ? parseFloat(windowElement.value) : 0;
                const windowText = windowElement ? windowElement.nextElementSibling.innerText : '';

                const selectedWindow = document.querySelector("input[name='options-for-windows']:checked")?.id || null;
                const selectedWindowPrice = selectedWindow
                    ? parseFloat(document.getElementById(`${selectedWindow}-prices`).value || 0)
                    : 0;

            //paint logic
            const paintingElement = document.querySelector("input[name='options-for-painting']:checked");
            const painting = paintingElement ? paintingElement.value : null;
            const paintingText = paintingElement ? paintingElement.nextElementSibling.innerText: '';


            // Create a summary of the selected options
            const selectedOptions = `   
                <h2>Selected Options:</h2>
                <p><strong>Site Dimension:</strong> ${siteDimension}</p>
                <p><strong>Floors:</strong> ${floors}</p>
                <p><strong>Plan:</strong> ${planText}</p>
                <p><strong>House Type:</strong> ${houseTypeText}</p>
                <p><strong>Structure:</strong> ${structureText} : Price=${selectedStructurePrices}</p>
                <p><strong>Flooring:</strong>  ${flooringText} : Price=${selectedFlooringPrice}</p>
                <p><strong>Door:</strong> ${doorText} : Price=${selectedDoorPrice}</p>
                <p><strong>Window:</strong> ${windowText} : Price=${selectedWindowPrice}</p>
                <p><strong>Painting:</strong> ${paintingText}</p>
            
            `;
            const tableHTML = `
                <p style="font-size: 1.5em; font-weight: bold; margin-top: 20px;" >Summary Table</p>
                <table class="table"  >
                    <tr><th>  Option </th>
                    <th>  Selection  </th>
                    <th>   Price(₹)  </th></tr>
                    <tr><td>  Site Dimension   </td>
                    <td>  ${siteDimension}  </td>
                    <td>  -  </td></tr>
                    <tr><td>  Site Dimension   </td>
                    <td>  ${siteDimension}  </td>
                    <td>  -  </td></tr>
                    <tr><td>  Site Dimension   </td>
                    <td>  ${siteDimension}  </td>
                    <td>  -  </td></tr>
                    <tr><td>  Site Dimension   </td>
                    <td>  ${siteDimension}  </td>
                    <td>  -  </td></tr>
                    
                </table>
            `;
            // Display the summary in the element with id 'selected-options'
            document.getElementById("report-container").innerHTML = selectedOptions ;

            document.getElementById("table-container").innerHTML =  tableHTML ;
        }
        function validatePlan() {
            const planError = document.getElementById('plan-error');
            const selectedPlan = document.querySelector("input[name='options-for-plan']:checked");
        
            if (!selectedPlan) {
                // Show an alert if no plan is selected
                alert('Please select a plan before proceeding.');
                location.reload();
            } 
            //else {
                // Clear the error message and refresh the page if a plan is selected
                //planError.textContent = '';
                //planError.style.display = 'none';
                //alert(`You selected the ${selectedPlan.nextElementSibling.textContent} plan.`);
                 // Refresh the page
            //}
        }
       
        function calculateResult(event) {
            event.preventDefault(); // Prevent form submission

            // Fetch values from dropdowns
            const siteDimension = document.getElementById("site-dimension").value;
            const floors = document.getElementById("floors").value;

            // Fetch values from radio button groups
            const plan = parseFloat(document.querySelector("input[name='options-for-plan']:checked")?.value || 0);
            const houseType = document.querySelector("input[name='options-for-ht']:checked")?.id || null;
            const painting = parseFloat(document.querySelector("input[name='options-for-painting']:checked")?.value || 0);

            // Structure logi
            const selectedStructure = document.querySelector("input[name='options-for-structure']:checked")?.id || null;
            const selectedStructurePrices = selectedStructure
                ? parseFloat(document.getElementById(`${selectedStructure}-prices`).value || 0)
                : 0;
            // Flooring logic
            const selectedFlooring = document.querySelector("input[name='options-for-flooring']:checked")?.id || null;
            const selectedFlooringPrice = selectedFlooring
                ? parseFloat(document.getElementById(`${selectedFlooring}-prices`).value || 0)
                : 0;

                // Door and Window price logic
                const selectedDoor = document.querySelector("input[name='options-for-doors']:checked")?.id || null;
                const selectedDoorPrice = selectedDoor
                    ? parseFloat(document.getElementById(`${selectedDoor}-prices`).value || 0)
                    : 0;

                const selectedWindow = document.querySelector("input[name='options-for-windows']:checked")?.id || null;
                const selectedWindowPrice = selectedWindow
                    ? parseFloat(document.getElementById(`${selectedWindow}-prices`).value || 0)
                    : 0;

            // Map site dimensions to values
            const dimensionsValue = siteDimension === "20x30" ? 600 : 
                                    siteDimension === "30x40" ? 1200 :
                                    siteDimension === "40x60" ? 2400 :
                                    siteDimension === "50x80" ? 4000 : 0;

            // Map floor values to numeric multipliers
            const floorsValue = floors === "GROUND FLOOR ONLY" ? 1 :
                                floors === "GROUND+1 FLOOR" ? 2 :
                                floors === "GROUND+2 FLOOR" ? 3 :
                                floors === "GROUND+3 FLOOR" ? 4 : 5;

            //calculate structure
            const cementbricks= selectedStructurePrices;

            // Calculate flooring value
            const flooringValue = (dimensionsValue / 1.76) * selectedFlooringPrice * selectedFlooringPrice / 2;
            const dimensionsprice = dimensionsValue * plan ;
            let dimensionsfloorsprice = dimensionsprice * floorsValue;
            const totaldimension = dimensionsValue * floorsValue;
            console.log('totaldimension', totaldimension);

            // Apply additional logic for house type
            if (houseType === "btn-for-rental") {
                dimensionsfloorsprice *= 1.3; // Increase by 30% for rental house
            } else if (houseType === "btn-for-duplex") {
                // No additional calculation for duplex houses
            }

            // Calculate door and window cost (7% of dimensionsfloorsprice * selected price)
            // Calculate the door cost including material cost
            const doorArea = 0.07 * totaldimension;  // 42 sq. ft.
            console.log('Door Area (sq. ft.):', doorArea);

            const materialCost = 0.30 * selectedDoorPrice;  // 300
            console.log('Material Cost:', materialCost);

            const doorCost = (doorArea * selectedDoorPrice) + (doorArea * materialCost);
            console.log('Total Door Cost:', doorCost);


            // Calculate the window cost including material cost
            const windowArea = 0.07 * totaldimension;
            const windowCost = selectedWindowPrice ? (windowArea * selectedWindowPrice) + (0.30 * selectedWindowPrice) : 0;
            // const cementbricks = 1500;
            console.log('cement bricks', cementbricks)
            console.log('plan', plan)
            console.log('painting',painting)
            // Calculate total cost
            const totalCost = dimensionsfloorsprice + flooringValue + doorCost + windowCost + cementbricks + painting;
            
            
            // Display result
            document.getElementById("result").innerText = `Total Cost: ₹${totalCost.toFixed(2)}`;
            console.log(totalCost);
            displaySelectedOptions();
            validatePlan();

        

            const totalAmount = totalCost;

            const data = [
                { name: "Clearing of Jungle", value: 6771 },
                { name: "Earth Work Excavation", value: 36144 },
                { name: "Soil filling", value: 22570 },
                { name: "PCC", value: 148491+372405 },
                { name: "RCC", value: 2110225 },
                { name: "CENTERING", value: 390221 },
                { name: "SSM", value: 84351 },
                { name: "REINFORCEMENT", value: 1934373 },
                { name: "CONCRETE BLOCK MASONRY", value: 1016579+31460 },
                { name: "PLASTERING", value: 395865+717475 },
                { name: "TILES", value: 340805+231390+236150+469980 },
                { name: "PAINTING", value: 197933+521800 },
                { name: "ANTI TERMITE TREATMENT", value: 45140 },
                { name: "DOOR, WINDOWS & VERTILATORS", value: 56100+8960+180180+16019+13300 },
                { name: "FABRICATIONS", value: 103275+76800+97000+75000 },
                { name: "PAINTING FOR STEEL", value: 118168 },
                { name: "UG SUMP 10000LTRS", value: 260000 },
                { name: "COMPOUND ", value: 8820+17150+88200+8085+112000+88200+44100 }
              ];

              const percentages = data.map(item => (item.value / totalAmount) * 100);

              const colors = [
                "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
                "#FF6347", "#4682B4", "#32CD32", "#9370DB", "#FFB6C1", "#FFA07A",
                "#20B2AA", "#B0E0E6", "#DDA0DD", "#8B4513", "#FFD700", "#DA70D6"
              ];
          
              const ctx = document.getElementById('myPieChart').getContext('2d');
              new Chart(ctx, {
                type: 'pie',
                data: {
                  labels: data.map(item => item.name),
                  datasets: [{
                    data: data.map(item => item.value),
                    backgroundColor: colors
                  }]
                },
                options: {
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    tooltip: {
                      callbacks: {
                        label: (tooltipItem) => {
                          const value = data[tooltipItem.dataIndex].value;
                          const percentage = percentages[tooltipItem.dataIndex].toFixed(2);
                          return `${data[tooltipItem.dataIndex].name}: ${value} (${percentage}%)`;
                        }
                      }
                    }
                  }
                }
              });
        }