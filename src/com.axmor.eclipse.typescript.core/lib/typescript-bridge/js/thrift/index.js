/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
exports.Thrift = require('./thrift');

var connection = require('./connection');
exports.Connection = connection.Connection;
exports.createClient = connection.createClient;
exports.createConnection = connection.createConnection;
exports.createSSLConnection = connection.createSSLConnection;
exports.createStdIOClient = connection.createStdIOClient;
exports.createStdIOConnection = connection.createStdIOConnection;

var server = require('./server');
exports.createServer = server.createServer;

exports.Int64 = require('./node-int64');
exports.Q = require('./q');

/*
 * Export transport and protocol so they can be used outside of a
 * cassandra/server context
 */
exports.TFramedTransport = require('./transport').TFramedTransport;
exports.TBufferedTransport = require('./transport').TBufferedTransport;
exports.TBinaryProtocol = require('./protocol').TBinaryProtocol;
exports.TJSONProtocol = require('./protocol').TJSONProtocol;
exports.TCompactProtocol = require('./protocol').TCompactProtocol;