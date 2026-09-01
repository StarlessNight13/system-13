import { Button } from "../../../registry/system13/button"
import { Popover } from "../../../registry/system13/popover"

export default function PopoverExample() {
  return <Popover trigger={<Button>OPTIONS</Button>}>Contextual content.</Popover>
}
