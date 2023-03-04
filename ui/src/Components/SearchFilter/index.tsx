import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'

interface FilterProps {
  title: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

const Filter = ({ title, options, value, onChange }: FilterProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    onChange(newValue)
  }

  return (
    <FormControl component="fieldset">
      <Typography variant="h6">{title}</Typography>
      <RadioGroup value={value} onChange={handleChange}>
        {options.map((option, index) => (
          <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default Filter
