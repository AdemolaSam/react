import Dictionary from "../components/Dictionary";
import Dropdown from "../components/Dropdown";
import Select from '../components/Select'
import SelectM from '../components/SelectM'

export default function DictionaryPage() {
    return (
        <>
            <Dictionary/>
            <Dropdown style={''} items={['list 1 cgcjyfyy', 'list 2cgcujyiuiggugugu', 'list 3']}/>
            <SelectM options={[{value:'one', item:'one'}, {value:'two', item:'two'}, {value:'three', item:'three'}]}/>
        </>
    )
}