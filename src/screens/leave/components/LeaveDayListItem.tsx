/*
 * This file is part of OrangeHRM
 *
 * Copyright (C) 2020 onwards OrangeHRM (https://www.orangehrm.com/)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'components/DefaultText';
import FormattedDate from 'components/FormattedDate';
import withTheme, {WithTheme} from 'lib/hoc/withTheme';
import {LeaveDetailedModel} from 'store/leave/leave-list/types';

class LeaveDayListItem extends React.Component<LeaveDayListItemProps> {
  render() {
    const {theme, leave} = this.props;

    return (
      <>
        <View
          style={[
            styles.row,
            {
              paddingHorizontal: theme.spacing * 4,
              paddingVertical: theme.spacing * 3,
            },
          ]}>
          <View
            style={{
              paddingVertical: theme.spacing,
              paddingRight: theme.spacing * 4,
            }}>
            <FormattedDate>{leave.dates.fromDate}</FormattedDate>
          </View>
          <View style={styles.flex}>
            <Text style={[styles.statusText]}>{leave.leaveStatus.name}</Text>
            <Text style={[{fontSize: theme.typography.smallFontSize}]}>
              {leave.lengthHours.toFixed(2)}
              {' Hours'}
            </Text>
          </View>
        </View>
      </>
    );
  }
}

interface LeaveDayListItemProps extends WithTheme {
  leave: LeaveDetailedModel;
}

const styles = StyleSheet.create({
  statusText: {
    fontWeight: 'bold',
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
});

export default withTheme<LeaveDayListItemProps>()(LeaveDayListItem);
