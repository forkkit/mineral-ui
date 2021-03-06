/* @flow */
import Box from '../../../Box/common/DemoBox';
import StartEnd from '../../common/DemoStartEnd';
import responsiveInstructions from '../../../Box/common/responsiveInstructions';

export default {
  id: 'responsive',
  title: 'Responsive',
  description: `Many of the properties for StartEnd can be responsive:

${responsiveInstructions}

The code in the example below exhibits the following behavior:

1. When the viewport is less than 800px wide, it will display as a column.
1. When the viewport is at least 800px wide, it will display as a row.`,
  scope: { Box, StartEnd },
  source: `
    <StartEnd
      breakpoints={[800]}
      direction={['column', 'row']}>
      <Box>Start</Box>
      <Box>End</Box>
    </StartEnd>`
};
