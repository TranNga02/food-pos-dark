import DishCard from '@/components/DishCard/DishCard.vue';
export default{
    name: 'menu-content',
    computed:{
        dishInfoID(){
            return this.$route.params.id;
        },
        dishInfo(){
            if(this.dishInfoID == 'hot-dishes') return this.dishInformation.hotDishes;
            if(this.dishInfoID == 'cold-dishes') return this.dishInformation.coldDishes;
            if(this.dishInfoID == 'soup') return this.dishInformation.soup;
            if(this.dishInfoID == 'grill') return this.dishInformation.grill;
            if(this.dishInfoID == 'appetizer') return this.dishInformation.appetizer;
            if(this.dishInfoID == 'dessert') return this.dishInformation.dessert;
        }
    },
    components:{
        DishCard
    },
    data(){
        return {
            dishInformation:
                {
                    hotDishes:[
                        {
                            image: "noodles.png",
                            name: "Salted Pasta with mushroom sauce",
                            price: 2.69,
                            quantity: 11
                        },
                        {
                            image: "noodles.png",
                            name: "Beef dumpling in hot and sour soup",
                            price: 2.99,
                            quantity: 16
                        },
                        {
                            image: "noodles.png",
                            name: "Healthy noodle with spinach leaf",
                            price: 3.29,
                            quantity: 22
                        },
                        {
                            image: "noodles.png",
                            name: "Hot spicy fried rice with omelet",
                            price: 3.49,
                            quantity: 13
                        },
                        {
                            image: "noodles.png",
                            name: "Spicy instant noodle with special omelette",
                            price: 3.59,
                            quantity: 17
                        },
                    ], 
                    coldDishes:[
                        {
                            image: "noodle-egg.png",
                            name: "Salted Pasta with mushroom sauce",
                            price: 2.69,
                            quantity: 11
                        },
                        {
                            image: "noodle-egg.png",
                            name: "Beef dumpling in hot and sour soup",
                            price: 2.99,
                            quantity: 16
                        },
                        {
                            image: "noodle-egg.png",
                            name: "Healthy noodle with spinach leaf",
                            price: 3.29,
                            quantity: 22
                        },
                        {
                            image: "noodle-egg.png",
                            name: "Hot spicy fried rice with omelet",
                            price: 3.49,
                            quantity: 13
                        },
                        {
                            image: "noodle-egg.png",
                            name: "Spicy instant noodle with special omelette",
                            price: 3.59,
                            quantity: 17
                        },
                    ],
                    soup:[
                        {
                            image: "dumpling.png",
                            name: "Salted Pasta with mushroom sauce",
                            price: 2.69,
                            quantity: 11
                        },
                        {
                            image: "dumpling.png",
                            name: "Beef dumpling in hot and sour soup",
                            price: 2.99,
                            quantity: 16
                        },
                        {
                            image: "dumpling.png",
                            name: "Healthy noodle with spinach leaf",
                            price: 3.29,
                            quantity: 22
                        },
                        {
                            image: "dumpling.png",
                            name: "Hot spicy fried rice with omelet",
                            price: 3.49,
                            quantity: 13
                        },
                        {
                            image: "dumpling.png",
                            name: "Spicy instant noodle with special omelette",
                            price: 3.59,
                            quantity: 17
                        },
                    ],   
                    grill:[
                        {
                            image: "pasta.png",
                            name: "Salted Pasta with mushroom sauce",
                            price: 2.69,
                            quantity: 11
                        },
                        {
                            image: "pasta.png",
                            name: "Beef dumpling in hot and sour soup",
                            price: 2.99,
                            quantity: 16
                        },
                        {
                            image: "pasta.png",
                            name: "Healthy noodle with spinach leaf",
                            price: 3.29,
                            quantity: 22
                        },
                        {
                            image: "pasta.png",
                            name: "Hot spicy fried rice with omelet",
                            price: 3.49,
                            quantity: 13
                        },
                        {
                            image: "pasta.png",
                            name: "Spicy instant noodle with special omelette",
                            price: 3.59,
                            quantity: 17
                        },
                    ],   
                    appetizer:[
                        {
                            image: "noodle-egg.png",
                            name: "Salted Pasta with mushroom sauce",
                            price: 2.69,
                            quantity: 11
                        },
                        {
                            image: "noodle-egg.png",
                            name: "Beef dumpling in hot and sour soup",
                            price: 2.99,
                            quantity: 16
                        },
                        {
                            image: "noodle-egg.png",
                            name: "Healthy noodle with spinach leaf",
                            price: 3.29,
                            quantity: 22
                        },
                        {
                            image: "noodle-egg.png",
                            name: "Hot spicy fried rice with omelet",
                            price: 3.49,
                            quantity: 13
                        },
                        {
                            image: "noodle-egg.png",
                            name: "Spicy instant noodle with special omelette",
                            price: 3.59,
                            quantity: 17
                        },
                    ],   
                    dessert:[
                        {
                            image: "noodles.png",
                            name: "Salted Pasta with mushroom sauce",
                            price: 2.69,
                            quantity: 11
                        },
                        {
                            image: "noodles.png",
                            name: "Beef dumpling in hot and sour soup",
                            price: 2.99,
                            quantity: 16
                        },
                        {
                            image: "noodles.png",
                            name: "Healthy noodle with spinach leaf",
                            price: 3.29,
                            quantity: 22
                        },
                        {
                            image: "noodles.png",
                            name: "Hot spicy fried rice with omelet",
                            price: 3.49,
                            quantity: 13
                        },
                        {
                            image: "noodles.png",
                            name: "Spicy instant noodle with special omelette",
                            price: 3.59,
                            quantity: 17
                        },
                    ]               
                }
            
        }
    }
}