for f in $(find . -name '*.ttl'); do
    curl http://0.0.0.0:7878/store\?default -H 'Content-Type: text/turtle' -T $f
    echo "Uploading $(basename $f) to oxigraph"
done