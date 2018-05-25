## Exercise 1

You're going to create a component named after yourself (e.g. `<Thomas />`, or `<Evelyn />` or `<Priya />`). It should contain the following information.

1. Your full name
1. Your cohort
1. Your home address
1. The make and model of your favorite vehicle
1. The name, and species/breed of your favorite, or ideal, pet

Make sure you author components for each unique object being represented and compose them into the component named after you.


## Exercise 2

You're going to update your application that represents you to use state and props. Previously, you hard-coded the following information into your components.

1. Your full name
1. Your cohort
1. Your home address
1. The make and model of your favorite vehicle
1. The name, and species/breed of your favorite, or ideal, pet

Now you need to pull all of that data that is scattered across your component files, and give your personal component an initial state with appropriate properties.

## Exercise 3

Create a CSS file for each of your components and import them into the corresponding component module.

## Exercise 4

Now it's time to take your personal data and expose it through an API with `json-server`. Create a `personal.json` file in your project with a `people` collection. Put your information in that collection.

```json
{
    "people": [
        {
            // Your properties go here
        }
    ]
}
```

Start your API with the following command.

```sh
json-server -p 8088 -w personal.json
```

Update your personal component to retrieve the information from the API, and when it is received, update the state of your component.

## Part Deux

Create multiple collections in your API.

1. Bio info (name and address)
1. Car information
1. Pet information

Use foreign keys to assign cars and pets to a person.

Once that's done, update your `componentDidMount` function to load all the related data, and use `setState` when each response comes back.