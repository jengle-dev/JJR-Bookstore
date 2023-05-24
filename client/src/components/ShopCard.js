// Card to add books to our shopping cart

useEffect(() => {        

    let finalSizeArray = props.product.variants[0].options.map(option => {
        let sizeInfo = {}

        sizeInfo.key = option.name
        sizeInfo.text = option.name
        sizeInfo.value = option.id

        return sizeInfo
    })

    setSizes(finalSizeArray)
}, []);

const [titles, setTitles] = useState([]); //add titles to dropdown component so we can choose the books we want to add

<Card>
    <Image src={props.product.media.source} />
    <Card.Content>
        <Card.Header>{props.product.name}</Card.Header>
        <Card.Meta>{props.product.price.formatted_with_symbol}</Card.Meta>
        <Card.Description>{props.product.description.replace(/(<([^>]+)>)/ig,"")}</Card.Description>
        <Dropdown
            className="titles-drop"
            onChange={handleTitle}
            value={sizes.text}
            fluid
            placeholder='Select a Featured Book'
            selection
            options={sizes}
        />
    </Card.Content>
</Card>