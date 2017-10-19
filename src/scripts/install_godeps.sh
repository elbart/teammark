#!/bin/bash

set -xe

go get google.golang.org/grpc
go get github.com/golang/protobuf/protoc-gen-go
go get github.com/improbable-eng/grpc-web/go/grpcweb
go get gopkg.in/gorethink/gorethink.v3