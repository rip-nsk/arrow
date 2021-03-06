// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

import {
    TextDecoder as TextDecoderPolyfill,
    TextEncoder as TextEncoderPolyfill,
} from 'text-encoding-utf-8';

const decoder = new (typeof TextDecoder !== 'undefined' ? TextDecoder : TextDecoderPolyfill)('utf-8');
/** @ignore */
export const decodeUtf8 = (buffer?: ArrayBuffer | ArrayBufferView) => decoder.decode(buffer);

const encoder = new (typeof TextEncoder !== 'undefined' ? TextEncoder : TextEncoderPolyfill)();
/** @ignore */
export const encodeUtf8 = (value?: string) => encoder.encode(value);
