# Patterns & practices

#### Avoid HTML's attribute names as props

Using HTML's original attributes may make it hard or impossible to override them. E.g, prefer `design='primary'` over `type='primary'`.


#### Write Controlled / uncontrolled components

We follow React's controlled/uncontrolled pattern for most components (inputs, selectors...). This means that if the component has a value (`value`, `checked`, `selected`...), and this value is passed by it's father, it will be a controlled component, so some kind of change event (`onChange`, `onInput`, ...) must be implemented. Else, it's an uncontrolled component, and the initial value can be passed as `defaultValue`/`defaultChecked`. Ex:

```
// controlled
<TheoreticalInput
  value={this.state.theoreticalInputValue}
  onInput={(value) => 
  	this.setState({theoreticalInputValue: value})
  } />
```

```
// uncontrolled
<form action="/save">
  <TheoreticalInput
    name="theory" />
</form>
```

#### Selector callback data should return full objects

Every selector component (a component that contains a list and a selected value) should return the selected _object_ and the original event on the `onChange` callback. Ex:

```
<TheoreticalSelector
  onChange=((selectedItem, event) => {
  	console.log(
  	  selectedItem.key,
  	  selectedItem.label,
  	  selectedItem.customInfo,
  	  event.target
  	)
  })
  options={[
    { key: 'foo', label: 'Foo', customInfo: 'bam' },
    { key: 'bar', label: 'Bar' },
    { key: 'baz', label: 'Baz' },  
  ]} />
```

This way we avoid object searches (in case we returned only the key) and allow event manipulation if needed.