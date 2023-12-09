package org.vitu.zip;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class PlayWithZip {

    public static void main(String[] args) throws IOException {
	
	String dirName = "C:/Users/Emile/Desktop/JAVA/java-projects/emile-workspace/PlayWithServiceLoader/src";
	Path dir = Path.of(dirName);
	Stream<Path> stream = Files.walk(dir);
	    
	List<Path> paths = stream.filter(path -> path.toString().length() > dirName.length() + 1)
		.map(path -> path.toString().substring(dirName.length() + 1))
	    	.map(Path::of)
	    	.collect(Collectors.toList());
	
	try (OutputStream os = new FileOutputStream("files/archive.zip");
		ZipOutputStream zos = new ZipOutputStream(os);
		OutputStreamWriter osw = new OutputStreamWriter(zos);
		BufferedWriter bw = new BufferedWriter(osw);) {
	    
	    for (Path path : paths) {
		
		Path absolutePath = Path.of(dirName, path.toString());
		if (Files.isDirectory(absolutePath)) {
		    String zipEntryName = path.toString() + "/";
		    ZipEntry zipEntry = new ZipEntry(zipEntryName);
		    zos.putNextEntry(zipEntry);
		} else {
		    ZipEntry zipEntry = new ZipEntry(path.toString());
		    zos.putNextEntry(zipEntry);
		    try (BufferedReader reader = Files.newBufferedReader(absolutePath);) {
			
			String line = reader.readLine();
			
			while (line != null) {
			    osw.write(line);
			    bw.newLine();
			    bw.flush();
			    osw.flush();
			    line = reader.readLine();
			}
		    } catch (IOException e) {
			e.printStackTrace();
		    }
		}
	    }
	    
	} catch (IOException e) {
	    e.printStackTrace();
	}
	System.out.println("Done!");
    }
}
