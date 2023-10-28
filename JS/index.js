document.addEventListener('DOMContentLoaded', () => {
    const menuElement = document.getElementById('menu');

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => {
            const categories = data.categories;
            categories.forEach(category => {
                const dishElement = createDishElement(category);
                menuElement.appendChild(dishElement);
            });
        })
        .catch(error => console.error('Error:', error));

//defines a function called createDishElement that takes a dish object as a parameter.
    function createDishElement(dish) {
        const dishElement = document.createElement('div');
        dishElement.classList.add('dish');
    console.log(dish)

    //This action effectively sets the text content of the h2 element to the value of dish.strCategory.
        const titleElement = document.createElement('h2');
        titleElement.textContent = dish.strCategory;

        // Creates an image element (<img>) for the dish.
        const img=document.createElement('img')
        console.log(dish.strCategoryThumb)
        img.src=`${dish.strCategoryThumb}`
        img.className='category-img'
        
        //responsible for creating a paragraph (<p>) element to display the description of the dish.
        const ingredientsElement = document.createElement('p');
        ingredientsElement.textContent = `Description: ${dish.strCategoryDescription}`;

        //creates a paragraph (<p>) element to display the number of votes for a particular dish.
        const voteElement = document.createElement('p');
        voteElement.textContent = `Votes: ${dish.votes || 0}`;

        //creating a button element that allows users to vote for a dish. 
        const voteButton = document.createElement('button');
        voteButton.classList.add('vote-btn');
        voteButton.textContent = 'Vote for Dish';
        voteButton.addEventListener('click', () => {
            dish.votes = (dish.votes || 0) + 1;
            voteElement.textContent = `Votes: ${dish.votes}`;
        });

       



     //Structure of the dish element
        dishElement.appendChild(titleElement);
        dishElement.appendChild(img)
        dishElement.appendChild(ingredientsElement);
        dishElement.appendChild(voteElement);
        dishElement.appendChild(voteButton);
        
        
        return dishElement;
    }
});
