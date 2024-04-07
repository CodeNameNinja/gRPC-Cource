# gRPC-Cource

## Getting Started

### Installation

```shell
npm init -y

yarn add google-protobuf @grpc/grpc-js 
```

### Add Dev Dependencies

```shell
yarn add -D  grpc-tools ts-node typescript
```

> If you are on ARM Architecture then run the following
> ```shell 
> npm_config_target_arch=x64 yarn add -D  grpc-tools
>```

## Automating the gRPC Code Generation

The following command will generate the gRPC code from the `greet` proto file
```shell
yarn pb:gen
```

## Making the proto file executable

```shell
chmod +x ./scripts/gen.sh
```