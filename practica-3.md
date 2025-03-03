# Infraestructura Serverless

## ¿Qué es la infraestructura Serverless?
La **infraestructura Serverless** (sin servidores) es un modelo de computación en la nube donde los desarrolladores pueden ejecutar aplicaciones sin preocuparse por la administración de servidores. Los proveedores en la nube asignan automáticamente recursos bajo demanda y cobran solo por el tiempo de ejecución del código.

## Características de Serverless
- **Autoscaling**: Se escala automáticamente según la demanda.
- **Pago por uso**: Se factura solo el tiempo de ejecución real.
- **Sin administración de servidores**: El proveedor maneja toda la infraestructura.
- **Alta disponibilidad**: Diseñado para ser altamente resiliente.

## Proveedores de Serverless más populares
| Proveedor      | Servicio Serverless |
|---------------|---------------------|
| AWS          | AWS Lambda          |
| Google Cloud | Cloud Functions     |
| Microsoft    | Azure Functions     |
| IBM          | IBM Cloud Functions |

## Ventajas y desventajas de Serverless

| **Ventajas** | **Desventajas** |
|-------------|---------------|
| Menos costos de infraestructura | Latencia en el arranque en frío |
| Mayor escalabilidad automática | Menos control sobre el entorno |
| Seguridad mejorada por el proveedor | Dependencia del proveedor (vendor lock-in) |

## Casos de uso
- **Procesamiento de eventos en tiempo real** (IoT, logs, streaming).
- **Microservicios y APIs** con FaaS (Function as a Service).
- **Automatización de tareas** con cron jobs sin necesidad de servidores dedicados.

## Ejemplo en AWS Lambda (Python)
```python
def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': '¡Hola desde AWS Lambda!'
    }


## Referencias:
-**https://openwebinars.net/blog/que-es-serverless-ventajas-y-servicios/**
