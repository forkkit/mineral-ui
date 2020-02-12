/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import withProps from 'recompose/withProps';
import { componentStyleReset, getNormalizedValue } from '../../library/styles';
import { themed, mineralTheme } from '../../library/themes';
import Markdown from './Markdown';
import Section from './Section';
import siteColors from './siteColors';

type Props = {};

const ThemedSection = themed(Section)({
  color: mineralTheme.color_white,

  Heading_color_4: mineralTheme.color_white,

  Link_color: siteColors.yellow,
  Link_color_active: siteColors.yellow_active,
  Link_color_focus: siteColors.yellow_focus,
  Link_color_hover: siteColors.yellow_hover
});

const Root = withProps({ as: 'footer' })(
  styled(ThemedSection)(({ theme }) => ({
    ...componentStyleReset(theme),

    backgroundColor: theme.color_black,
    color: theme.color_gray_40,
    fontWeight: theme.fontWeight_medium,

    '& ::selection': {
      backgroundColor: 'rgba(255,255,255,0.2)'
    },

    // Inner
    '& > div': {
      paddingBottom: 1, // To prevent margin collapse
      paddingTop: 1, // To prevent margin collapse

      // Markdown
      '& > div': {
        '& > p[class]': {
          fontSize: theme.fontSize_mouse,
          lineHeight: theme.lineHeight,
          margin: `${getNormalizedValue(
            theme.baseline_1,
            theme.fontSize_mouse
          )} 0`
        },

        [theme.bp_home_navExpanded]: {
          display: 'flex',

          '& > p:last-child': {
            marginLeft: 'auto'
          }
        }
      }
    }
  }))
);

export default function Footer(props: Props) {
  return (
    <Root {...props}>
      <Markdown>
        {`Copyright © 2020 Mineral UI

We welcome feedback and contributions on [GitHub](https://github.com/mineral-ui/mineral-ui)`}
      </Markdown>
    </Root>
  );
}
