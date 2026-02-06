k3d cluster list;
k3d cluster delete todo;
k3d cluster create todo \
  --api-port 127.0.0.1:6550 \
  --agents 1 \
  -p "80:80@loadbalancer" \
  -p "443:443@loadbalancer";

kubectl apply -f namespaces/namespace.yaml;

kubectl apply -f configmaps/configmap.yaml;

kubectl apply -f services/mongo-service.yaml;
kubectl apply -f services/backend-service.yaml;
kubectl apply -f services/frontend-service.yaml;

kubectl apply -f statefulset/mongo-statefulset.yaml;

kubectl apply -f deployments/backend-deployment.yaml;
kubectl apply -f deployments/frontend-deployment.yaml;

kubectl apply -f ingress/ingress.yaml
