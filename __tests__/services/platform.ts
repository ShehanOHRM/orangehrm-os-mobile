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

import {isAboveIOS14} from 'services/platform';
import {Platform} from 'react-native';

jest
  .spyOn(Platform, 'Version', 'get')
  .mockReturnValueOnce('14.1')
  .mockReturnValueOnce('13.1')
  .mockReturnValue(10);

describe('services/platform', () => {
  test('isAboveIOS14', () => {
    Platform.OS = 'ios';

    const result = isAboveIOS14();
    expect(result).toBeTruthy();
  });

  test('isAboveIOS14::below iOS 14', () => {
    Platform.OS = 'ios';

    const result = isAboveIOS14();
    expect(result).toBeFalsy();
  });

  test('isAboveIOS14::on android', () => {
    Platform.OS = 'android';

    const result = isAboveIOS14();
    expect(result).toBeFalsy();
  });
});
