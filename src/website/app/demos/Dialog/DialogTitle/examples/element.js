/* @flow */
import { DialogHeader, DialogTitle } from '../../../../../../library/Dialog';
import DemoLayout from '../../common/DemoLayout';
import Dialog from '../../common/DemoDialog';

export default {
  id: 'element-appearance',
  title: 'Element & Appearance',
  description: `Apply the appropriate semantic meaning & styles the \`as\`
and \`appearance\` props. See [Text](/components/text/#headings) for more details.`,
  scope: {
    DemoLayout,
    Dialog,
    DialogHeader,
    DialogTitle
  },
  source: `
    <DemoLayout>
      <Dialog>
        <DialogHeader>
          <DialogTitle as='h3' appearance="h1">
            This title is an h3 that looks like a level 1 heading
          </DialogTitle>
        </DialogHeader>
      </Dialog>
    </DemoLayout>
  `
};
