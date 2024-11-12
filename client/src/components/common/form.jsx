import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';


const types = {
  INPUT:"input",
  SELECT:"select",
  TEXTAREA:"textarea"
}

function CommonForm ({formControls,formData,setFormData,onSubmit,buttonText}) {

  function renderInputsByComponentType(getControlItem){
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch(getControlItem.componentType){
      case types.INPUT:
         element = 
            <Input 
              name={getControlItem.name} 
              placeholder={getControlItem.placeholder}
              id={getControlItem.name}
              type={getControlItem.type}
              value={value}
              onChange={event=>{
                setFormData({
                  ...formData,
                  [getControlItem.name]:event.target.value
                })
              }}
            />
         break;   
      case types.SELECT:
         element = 
            <Select value={value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={getControlItem.placeholder}></SelectValue>
              </SelectTrigger>
              <SelectContent>
                {
                  getControlItem?.options?.map(optionItem => <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>)
                }
              </SelectContent>
            </Select>
         break;   
      case types.TEXTAREA:
         element = 
            <Textarea 
              name={getControlItem.name} 
              placeholder={getControlItem.placeholder}
              id={getControlItem.name}
              value={value}
            />
         break;   

        default:
          element = 
            <Input 
              name={getControlItem.name} 
              placeholder={getControlItem.placeholder}
              id={getControlItem.name}
              type={getControlItem.type}
              value={value}

            />

    }

    return element
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-col gap-3'>
        {formControls.map((controlItem) => {
            return (
            <div className='grid w-full gap-1.5' key={controlItem.name}>
                <Label className="mb-1">{controlItem.name}</Label>
                {renderInputsByComponentType(controlItem)}
            </div>
            )
          })
        }
      </div>
      <Button className="mt-2 w-full ">{buttonText || "Submit" }</Button>
    </form>
  )
}

export default CommonForm
